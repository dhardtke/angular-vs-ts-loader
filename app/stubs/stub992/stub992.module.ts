import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub992Component} from "./stub992.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub992Component
        }])
    ],
    declarations: [
        Stub992Component
    ]
})
export class Stub992Module {

}
