import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub317Component} from "./stub317.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub317Component
        }])
    ],
    declarations: [
        Stub317Component
    ]
})
export class Stub317Module {

}
