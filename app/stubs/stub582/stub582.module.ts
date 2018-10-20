import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub582Component} from "./stub582.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub582Component
        }])
    ],
    declarations: [
        Stub582Component
    ]
})
export class Stub582Module {

}
