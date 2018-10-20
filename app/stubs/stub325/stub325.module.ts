import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub325Component} from "./stub325.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub325Component
        }])
    ],
    declarations: [
        Stub325Component
    ]
})
export class Stub325Module {

}
