import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub960Component} from "./stub960.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub960Component
        }])
    ],
    declarations: [
        Stub960Component
    ]
})
export class Stub960Module {

}
