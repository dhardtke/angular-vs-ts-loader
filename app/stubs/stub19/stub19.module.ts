import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub19Component} from "./stub19.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub19Component
        }])
    ],
    declarations: [
        Stub19Component
    ]
})
export class Stub19Module {

}
